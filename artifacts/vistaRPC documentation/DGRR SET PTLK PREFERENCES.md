---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DGRR SET PTLK PREFERENCES 

 property | value 
--- | --- 
 label | DGRR SET PTLK PREFERENCES
 tag | UPDATE
 routine | [DGRRLU4](http://code.osehra.org/dox/Routine_DGRRLU4_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure call updates the division/institutional preferences passed to the call. It returns an xml document containing the stationnumber and status.  If update was successful, status is returned astrue.  If errors were encountered during the update, false is returnedwith an error message.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAMS | LIST |  |  | PARAMS(\stationNumber\)=station number for division/institutionPARAMS(\maxNumberPatients\)=Number between 20 and 100PARAMS(\patientsPerPage\)=Number between 5 and 20PARAMS(\patientType\)=Disabled or EnabledPARAMS(\gender\)=Disabled or EnabledPARAMS(\primaryEligibility\)=Disabled or EnabledPARAMS(\roomBed\)=Disabled or EnabledPARAMS(\serviceConnected\)=Disabled or EnabledPARAMS(\veteranStatus\)=Disabled or EnabledPARAMS(\ward\)=Disabled or EnabledPARAMS(\veteranImage\)=Disabled or EnabledPARAMS(\veteranStatus\)=Disabled or EnabledPARAMS(\ward\)=Disabled or EnabledPARAMS(\veteranImage\)=Disabled or Enabled | 




 ###### Generated on January 11th 2017, 6:39:43 am