import os
from PIL import Image


def image_type_conversion():
    path = input("请传入文件夹相对路径：")
    files = os.listdir(path)
    for file in files:  # 遍历每个子文件夹中的图片
        if ".jpg" in file:
            file_path = os.path.join(path, file)
            print("每张照片的绝对路径：", file_path)
            im = Image.open(file_path)
            im.load()
            save_name = file_path.replace("webp", "jpg")
            im.save(save_name, "jpg", quality=95, subsampling=0)

image_type_conversion()
