import os
from PIL import Image

# Specify the directory where the images are located
src = "static/converted_images"
des = "static/compress_images"
try:
    os.mkdir(des)
except:
    pass


# Loop through all the images in the directory
# for filename in os.listdir(src):
#     if filename.endswith(".jpg"):
#         # Open the image
#         img = Image.open(os.path.join(src, filename))

#         # Save the image in webp format
#         img.save(os.path.join(des, filename.replace(".jpg", ".webp")), "webp", quality=60, optimize=True)
#         print(f'done')

for filename in os.listdir(src):
    if filename.endswith('.webp'):
        image = Image.open(os.path.join(src,filename))
        image.save(os.path.join(des,filename), quality=50)
