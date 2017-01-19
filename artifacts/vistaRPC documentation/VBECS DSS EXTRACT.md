---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VBECS DSS EXTRACT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VBECS DSS EXTRACT{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [VBECDSS](http://code.osehra.org/dox/Routine_VBECDSS_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC inserts or updates post transfusion related data in the VBECS DSSEXTRACT file (#6002.03). The data is passed into the VBECDSS routine through the input parameters and a success indicator is returned to the Blood Bank medical device.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PARAMS(\TRANSACTION ID\) = Unique record identifierPARAMS(\DFN\) = Patient identifierPARAMS(\ORDERING LOCATION\) = Ordering Institution IdentifierPARAMS(\TRANSFUSION LOCATION\) = Tranfusing Institution identifierPARAMS(\PHYSICIAN\) = Provider requesting blood product for transfusionPARAMS(\ORDERING PROVIDER\) = Provider who ordered Type and CrossmatchPARAMS(\PRODUCT NAME\) = Short blood product namePARAMS(\COMPONENT ABBREVIATION\) = Abbreviation of blood componentPARAMS(\NUMBER OF UNITS\) = Number of pooled units transfusedPARAMS(\TRANSFUSION DATE\) = Date/time of transfusionPARAMS(\VOLUME\) = Total volume of units transfusedPARAMS(\REACTION TYPE\) = Type of reaction indicatedPARAMS(\UNIT MODIFICATION\) = String of codes representing modifications    done on units transfused. String cannot exceed 6 character.    D = Deglycerolize   F = Freeze   I = Irradiate   L = Leukoreduce   P = Pool   R = Rejuvenate   S = Split/Divide   T = Thaw   U = Thaw/Pool Cryo   V = Volume Reduce   W = WashPARAMS(\REACTION\) = Yes or No value if a reaction was indicated.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}