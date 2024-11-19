from django.contrib import admin
from users.models import CustomUser, Youth, Corporation

# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Youth)
admin.site.register(Corporation)
