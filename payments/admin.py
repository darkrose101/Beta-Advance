from django.contrib import admin
from payments.models import Escrow, Transaction

# Register your models here.

admin.site.register(Escrow)
admin.site.register(Transaction)
