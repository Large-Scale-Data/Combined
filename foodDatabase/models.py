from django.db import models


class fooditem(models.Model):
    Class = models.CharField(max_length=50)
    Type = models.CharField(max_length=50)
    Group = models.CharField(max_length=50)
    Food = models.CharField(max_length=50)
    Allergy = models.CharField(max_length=50)

    def __str__(self):
        return self.Class
        return self.Type
        return self.Group
        return self.Food
        return self.Allergy

