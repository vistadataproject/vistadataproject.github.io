---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS EDIT SITEPAR STATION 

 property | value 
--- | --- 
 label | OOPS EDIT SITEPAR STATION
 tag | SITEPEDT
 routine | [OOPSGUI6](http://code.osehra.org/dox/Routine_OOPSGUI6_source.html)
 return value type | SINGLE VALUE
 description | This broker call will either add a new Station subfile to the Site parameterfile or will allow for editing an existing Station subfile.  If the StationIEN is passed in the INPUT parameter, the record will be edited.  If a StationIEN is not passed in the input parameter, a new record will be created.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL | 256 | true | This parameter (INPUT) contains the required IENs for filing a record.  If theStation IEN is passed in the record will be edited, if no Station IEN ispresent, a new Station subrecord will be created.  The format is:SITE IEN^SUBFILE #^STATION IEN | 
| DATA | LITERAL | 256 | true | This parameter contains the data to be filed in the Station subfile. | 
| FORM | LITERAL | 30 | true |  | 




Generated on January 11th 2017, 6:34:23 am