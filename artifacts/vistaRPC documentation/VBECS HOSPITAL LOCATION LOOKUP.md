---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VBECS HOSPITAL LOCATION LOOKUP 

 property | value 
--- | --- 
 label | VBECS HOSPITAL LOCATION LOOKUP
 tag | LOC
 routine | [VBECRPCD](http://code.osehra.org/dox/Routine_VBECRPCD_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns XML containing a list of Hospital Locations from the HOSPITAL LOCATION file (#44) of either Ward or Clinic Type for use in VBECS when issuing units to a location other than the Blood Bank. XML Mapping:LocationName element = HOSPITAL LOCATION file (#44) / NAME field (#.01)LocationIEN element =  HOSPITAL LOCATION file (#44) / NUMBER field (#.001)LocationType element = HOSPITAL LOCATION file (#44) / TYPE field (#2) XML Example:<HospitalLocations>    <Location>        <LocationName>6W REHAB-KC</LocationName>        <LocationIEN>503</LocationIEN>        <LocationType>W</LocationType>    </Location>    <Location>        <LocationName>7E PCUS-KC</LocationName>        <LocationIEN>504</LocationIEN>        <LocationType>W</LocationType>    </Location>    <Location>        <LocationName>KC-GI RESEARCH</LocationName>        <LocationIEN>511</LocationIEN>        <LocationType>C</LocationType>    </Location></HospitalLocations>

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DIV | LITERAL | 999 | true | Input DIV = DIVISION Name | 




Generated on January 11th 2017, 6:34:23 am