import datetime
import os
import re
import shutil

from openpyxl import load_workbook

# created by huzongyao

SITE_ROOT = 'https://cop-dev.github.io/ios-apps/'
DIST_PATH = './dist/'
EXCEL_PATH = './apps.xlsx'
TOP_DOC_PATH = './tpl/root.html'
SUB_DOC_PATH = './tpl/sub.html'


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


def _load_doc_tpl(doc_path):
    with open(doc_path, 'r', encoding='utf-8') as doc:
        txt = doc.read()
    return txt


def generate_some_plist(idx, row, out_path):
    name = row[0].value
    bundle_id = row[1].value
    version = row[2].value
    bundle_url = row[3].value
    plist_name = '%s_%s_%s.plist' % (bundle_id, version, idx)
    return plist_name


def generate_single_sheet(sheet, out_path):
    if not os.path.exists(out_path):
        os.makedirs(out_path)
    html_txt = ''
    sub_doc = _load_doc_tpl(SUB_DOC_PATH)
    for idx, row in enumerate(sheet.rows):
        if idx == 0:
            continue
        name = row[0].value
        version = row[2].value
        plist_name = generate_some_plist(idx, row, out_path)
        plist_path = '%s%s' % (SITE_ROOT, plist_name)
        href = 'itms-services://?action=download-manifest&url=%s' % plist_path
        html_txt += '<li><a href="%s">%s(%s)</a></li>\n' % (href, name, version)
    if not html_txt:
        html_txt = 'No Items!!'
    txt = sub_doc.replace('%list_content%', html_txt)
    txt = txt.replace('%title%', sheet.title)
    html_path = '%sindex.html' % out_path
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(txt)


def page_generate_work():
    if not os.path.exists(EXCEL_PATH):
        print('EXCEL File Not Exists!!')
        return
    if not os.path.exists(DIST_PATH):
        os.makedirs(DIST_PATH)
    if not os.path.exists('%sqrcode.png' % DIST_PATH):
        shutil.copy('./tpl/qrcode.png', DIST_PATH)
    wb = load_workbook(EXCEL_PATH)
    html_txt = ''
    top_doc = _load_doc_tpl(TOP_DOC_PATH)
    for sheet in wb:
        sheet_title = check_file_name(sheet.title)
        sheet_path = '%s%s/' % (DIST_PATH, sheet_title)
        html_txt += '<li><a href="./%s/index.html">%s</a></li>\n' % (sheet_title, sheet_title)
        generate_single_sheet(sheet, sheet_path)
    txt = top_doc.replace('%list_content%', html_txt)
    time_txt = datetime.datetime.now().strftime("%Y%m%d %H%M%S")
    txt = txt.replace('%update_date%', time_txt)
    html_path = '%sindex.html' % DIST_PATH
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(txt)


if __name__ == "__main__":
    page_generate_work()
