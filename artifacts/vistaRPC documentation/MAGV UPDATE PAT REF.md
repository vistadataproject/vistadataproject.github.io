---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV UPDATE PAT REF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV UPDATE PAT REF{:/}
 tag | {::nomarkdown}UPDPAT{:/}
 routine | [MAGVRS06](http://code.osehra.org/dox/Routine_MAGVRS06_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC allows an Imaging patient reference to be updated.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIDATTS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}32000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point UPDPAT^MAGVRS06.  The first argument contains thereturned value in an array that should also be passed by reference. Input parameters used for update are the following:  IEN (required): the internal entry number of the patient reference  ID_VALUE (required): the raw value of the ID ID_TYPE (required): the type of ID (M)RN or (I)CN or (D)FN ASSIGNING_ENTITY: (V)A, (D)oD, (I)HS{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This parameter overrides parent IEN checking.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}