from django.contrib import admin
from django.urls import path
from django.shortcuts import render
from django import forms
from .models import fooditem
from django.contrib import messages
from django.http import HttpResponseRedirect
from django.urls import reverse


class CsvImportForm(forms.Form):
    csv_upload = forms.FileField()


class fooditemsAdmin(admin.ModelAdmin):
    list_display = ('Class', 'Type', 'Group', 'Food', 'Allergy')

    def get_urls(self):
        urls = super().get_urls()
        new_urls = [path('upload-csv/', self.upload_csv), ]
        return new_urls + urls

    def upload_csv(self, request):

        if request.method == "POST":
            csv_file = request.FILES["csv_upload"]

            if not csv_file.name.endswith('.csv'):
                messages.warning(request, 'The wrong file type was uploaded')
                return HttpResponseRedirect(request.path_info)

            file_data = csv_file.read().decode("utf-8")
            csv_data = file_data.split("\n")

            for x in csv_data:
                fields = x.split(",")
                created = fooditem.objects.update_or_create(
                    Class=fields[0],
                    Type=fields[1],
                    Group=fields[2],
                    Food=fields[3],
                    Allergy=fields[4],
                )
            url = reverse('admin:index')
            return HttpResponseRedirect(url)

        form = CsvImportForm()
        data = {"form": form}
        return render(request, "admin/csv_upload.html", data)


admin.site.register(fooditem, fooditemsAdmin)
