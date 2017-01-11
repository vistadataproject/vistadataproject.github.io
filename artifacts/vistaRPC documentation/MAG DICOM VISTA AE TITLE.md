---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM VISTA AE TITLE 

 property | value 
--- | --- 
 label | MAG DICOM VISTA AE TITLE
 tag | VATITLE
 routine | [MAGVRS52](http://code.osehra.org/dox/Routine_MAGVRS52_source.html)
 return value type | SINGLE VALUE
 description | This Remote Procedure returns a string that can be usedas a DICOM Application Entity title for the purposeestablished by the parameters to this procedure.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SERVICE | LITERAL | 20 | true | The value of this parameter is a string. This stringidentifies a DICOM DIMSE Service.The procedure will validate that the specified ApplicationEntity is permitted to perform the service specified inthis parameter. | 
| ROLE | LITERAL | 3 | true | The value of this parameter is a string. This string shouldbe equal to either \SCU\ (Service Class User) or\SCP\ (Service Class Provider).The procedure will validate that the specified ApplicationEntity is permitted to operate in the specified role. | 
| LOCATION | LITERAL | 6 | true | The value of this parameter is a string.  This string is compared tothe appropriate value in the INSTITUTION File (#4).This is needed to return the appropriate AETitle that represents aspecific division. | 




Generated on January 11th 2017, 6:34:23 am