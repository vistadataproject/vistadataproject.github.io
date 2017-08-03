---
layout: default
title: Workload "DSS" Demo - Locations
---

The following shows the locations where care was given to a particular patient in November 2008. It shows how _location_ is more than a physical concept in VISTA and the VA - it represents a combination of place and the type of work performed and, in many cases, also who is performing work. 

Specifically patient [_Frank Gilbert_ was seen](https://workload.vistadataproject.info/patientCalendar/workDetails/7199390/2008/10) at seven different "locations" in November 2008:
  * five are _Personal Locations_ ("ZZIOW C&P __JENSEN__", "IOW C&P AUDIO __RODGERS__", "IOW OPTOMETRY __KNIGHT__ RETURN", "ZZIOW C&P __SALAZAR__", "IOW MH __AGUILAR__"). As well as being named for an institution (_IOW_ for Iowa) and type of work (_C&P AUDIO_, _OPTOMETRY_), these locations are named for a particular provider such a Nancy __ROGERS__ or Jayden __KNIGHT__. Such _locations_ allow a provider's time to be scheduled and the nature of work performed to be designated.
  * one, _IOW OIF/OEF CASE MGT NURSE_, is named for the role of the provider, _NURSE_, instead of for a specific provider
  * one, _RADIOLOGY DIV 999 OOS ID 105_, is primarily named for a class of work (_RADIOLOGY_) performed at the institution with Station Number _999_ (_IOWA_). The specific DSS code for this class of work is _105_ (_XRAY_) 

__Note__: the [Location Browser shows](https://workload.vistadataproject.info/locations?page=0&pageSize=20&sortBy=label&sortDir=asc&institution=-1&division=-1&stopCode=-1&creditStopCode=-1&type44=-1&isPersonal=true&excludeDeleted=false) that _Personal Locations_ make up 698 of the 1900 locations in the _IOWA Hospital System_.

## ZZIOW C&P JENSEN ([949](https://workload.vistadataproject.info/locationDetails/949)) 

![](imagesLocn/Locn_ZZIOW_CP_JENSEN.png)
...

## IOW C&P AUDIO RODGERS ([947](https://workload.vistadataproject.info/locationDetails/947))

Nancy Rodgers, an Audiologist, names this _Personal Location_. Work at this location is _AUDIOLOGY_, specifically
_C&P EXAMS_ ...

![](imagesLocn/Locn_IOW_CP_AUDIO_ROGERS_.png)

On November 2008, there were 18 piece of work (workload) performed there ...

![](imagesLocn/LocnIOW_CP_AUDIO_ROGERS_TIMELINE_11_08.png)

Work is spread [throughout the month](https://workload.vistadataproject.info/locationCalendar/workDetails/947/2008/10) and, as expected from the location's definition, it is all _AUDIOLOGY_ ...

![](imagesLocn/LocnIOW_CP_AUDIO_ROGERS_DETAILS.png)

_AUDIOLOGY_ is red, the color of _Ancillary and General Support Services_ which is the DSS grouping it belongs to.

Patient _Frank Gilbert_ was seen on the 25th. The workload is _AUDIOLOGY/C&P EXAMS_ with a very generic CPT, _DISABILITY EXAMINATION_. This is a case of the DSS codes being more precise than CPT and if you examine [other Workload in the same month](https://workload.vistadataproject.info/locationCalendar/workDetails/947/2008/10), they share the same DSS/CPT combination ... 

![](imagesLocn/LocnIOW_CP_AUDIO_ROGERS_DETAILS_25th.png)

What is _NPCD_ in the property _Sent to NPCD_? That's the VA's _National Patient Care Database_ in Austin Texas. Every VISTA sends Workload data like the above to Austin.

## IOW OIF/OEF CASE MGT NURSE ([1302](https://workload.vistadataproject.info/locationDetails/1302))

This location isn't personal - its "named for provider" property has no value. Instead the role - _NURSE_ - of the providers who use it is part of its name ...

![](imagesLocn/LocnIOW_OIF_NURSE.png)

On November 2008, six pieces of work, all _Primary Care Medicine_ were performed there ...

![](imagesLocn/LocnIOW_OIF_NURSE_TIMELINE_11_08.png)

_Primary Care_ is green, the color of _Medicine and Primary Care Services_ which is the DSS grouping it belongs to. Note that the location's DSS is _GENERAL INTERNAL MEDICINE_, a DSS from the same DSS grouping. At some point between November 2008 and "now" (March 2011), the location's DSS changed. A browse of its timeline shows the change happened in April 2009 ...

![](imagesLocn/LocnIOW_OIF_NURSE_TIMELINE_DSS_CHANGE.png)

Frank Gilbert was seen on the 25th ...

![](imagesLocn/LocnIOW_OIF_NURSE_DETAILS_25th.png)
...

Despite being named for a role (_NURSE_), all work performed [at this location on this month](https://workload.vistadataproject.info/locationCalendar/workDetails/1302/2008/10) is by one nurse, Edna Dawson. At least for this month, the location could have been named _IOW OIF/OEF CASE MGT DAWSON_ ...

![](imagesLocn/LocnIOW_OIF_NURSE_TIMELINE.png)
...

## IOW OPTOMETRY KNIGHT RETURN ([855](https://workload.vistadataproject.info/locationDetails/855))

KNIGHT,JAYDEN B

![](imagesLocn/LocnIOW_OPT_KNIGHT.png)
...
![](imagesLocn/LocnIOW_OPT_KNIGHT_DETAILS.png)
...
![](imagesLocn/LocnIOW_OPT_KNIGHT_DETAILS_25th.png)
...
![](imagesLocn/LocnIOW_OPT_KNIGHT_TIMELINE.png)
...
![](imagesLocn/LocnIOW_OPT_KNIGHT_TIMELINE_11_08.png)
...

## RADIOLOGY DIV 999 OOS ID 105 ([193](https://workload.vistadataproject.info/locationDetails/193))

... Radiologists?

![](imagesLocn/LocnRadiologyXRAY.png)
...
![](imagesLocn/LocnRadiologyXRAY_DETAILS-25th.png)
...
![](imagesLocn/LocnRadiologyXRAY_DETAILS.png)
...
![](imagesLocn/LocnRadiologyXRAY_TIMELINE.png)
...
![](imagesLocn/LocnRadiologyXRAY_TIMELINE_11_08.png)
...

## ZZIOW C&P SALAZAR ([932](https://workload.vistadataproject.info/locationDetails/932))

![](imagesLocn/LocnSalazar-Extra-RAD.png)
...
![](imagesLocn/LocnSalazarDETAILS_25th.png)
...
![](imagesLocn/LocnZZSalazar.png)
...
![](imagesLocn/LocnZZSalazarTimeline_11_08.png)
...

## IOW MH AGUILAR ([1390](https://workload.vistadataproject.info/locationDetails/1390))

AGUILAR,ESSIE E ... 
