import datetime
import os
import re
import shutil

from openpyxl import load_workbook


# created by huzongyao


class IOSAppDeploy:
    SITE_ROOT = 'https://cop-dev.github.io/ios-apps/'
    DIST_PATH = './dist/'
    EXCEL_PATH = './apps.xlsx'
    TOP_DOC_PATH = './tpl/root.html'
    SUB_DOC_PATH = './tpl/sub.html'
    PLIST_TPL_PATH = './tpl/plist.xml'

    def __init__(self):
        self.sub_tpl = self._load_doc_tpl(self.SUB_DOC_PATH)
        self.plist_tpl = self._load_doc_tpl(self.PLIST_TPL_PATH)

    @staticmethod
    def check_file_name(name=None):
        if name is None:
            print("name is None!")
            return
        reg = re.compile(r'[\\/:*?"<>|\r\n\t]+')
        valid_name = reg.findall(name)
        if valid_name:
            for nv in valid_name:
                name = name.replace(nv, "_")
        return name

    @staticmethod
    def _load_doc_tpl(doc_path):
        with open(doc_path, 'r', encoding='utf-8') as doc:
            txt = doc.read()
        return txt

    def generate_some_plist(self, idx, row, out_path):
        name = row[0].value
        bundle_id = row[1].value
        version = row[2].value
        bundle_url = row[3].value
        plist_name = '%s_%s_%s.plist' % (bundle_id, version, idx)
        plist_path = '%s%s' % (out_path, plist_name)
        txt = self.plist_tpl
        txt = txt.replace('%app_name%', name)
        txt = txt.replace('%bundle_version%', version)
        txt = txt.replace('%bundle_id%', bundle_id)
        txt = txt.replace('%bundle_url%', bundle_url)
        with open(plist_path, 'w', encoding='utf-8') as f:
            f.write(txt)
        return plist_name

    def generate_single_sheet(self, sheet, out_path):
        if not os.path.exists(out_path):
            os.makedirs(out_path)
        html_txt = ''
        sub_doc = self.sub_tpl
        for idx, row in enumerate(sheet.rows):
            if idx == 0:
                continue
            name = row[0].value
            version = row[2].value
            plist_name = self.generate_some_plist(idx, row, out_path)
            plist_path = '%s%s' % (self.SITE_ROOT, plist_name)
            href = 'itms-services://?action=download-manifest&url=%s' % plist_path
            html_txt += '<li><a href="%s">%s(%s)</a></li>\n' % (href, name, version)
        if not html_txt:
            html_txt = 'No Items!!'
        txt = sub_doc.replace('%list_content%', html_txt)
        txt = txt.replace('%title%', sheet.title)
        html_path = '%sindex.html' % out_path
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(txt)

    def page_generate_work(self):
        if not os.path.exists(self.EXCEL_PATH):
            print('EXCEL File Not Exists!!')
            return
        if not os.path.exists(self.DIST_PATH):
            os.makedirs(self.DIST_PATH)
        if not os.path.exists('%sqrcode.png' % self.DIST_PATH):
            shutil.copy('./tpl/qrcode.png', self.DIST_PATH)
        wb = load_workbook(self.EXCEL_PATH)
        html_txt = ''
        top_doc = self._load_doc_tpl(self.TOP_DOC_PATH)
        for sheet in wb:
            sheet_title = self.check_file_name(sheet.title)
            sheet_path = '%s%s/' % (self.DIST_PATH, sheet_title)
            html_txt += '<li><a href="./%s/index.html">%s</a></li>\n' % (sheet_title, sheet_title)
            self.generate_single_sheet(sheet, sheet_path)
        txt = top_doc.replace('%list_content%', html_txt)
        time_txt = datetime.datetime.now().strftime("%Y%m%d %H%M%S")
        txt = txt.replace('%update_date%', time_txt)
        html_path = '%sindex.html' % self.DIST_PATH
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(txt)


if __name__ == "__main__":
    dep = IOSAppDeploy()
    dep.page_generate_work()
