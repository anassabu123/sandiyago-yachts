from django.db import models

# Upload Yacht data
class DocumentsUpload(models.Model):
    # name = models.CharField(max_length=20)
    files =  models.FileField(max_length=255,null=True,blank=True)