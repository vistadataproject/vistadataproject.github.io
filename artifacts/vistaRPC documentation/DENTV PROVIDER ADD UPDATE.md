---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DENTV PROVIDER ADD UPDATE 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV PROVIDER ADD UPDATE{:/}
 tag | {::nomarkdown}EDIT{:/}
 routine | [DENTVRP5](http://code.osehra.org/dox/Routine_DENTVRP5_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC allows Dental Record Manager to add/edit their Dental Providers.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The input array contains the Dental Provider information to be added/updated into file 220.5.  The following fields are sent:  DATA(\PERSON\)=pointer to file 200 (PERSON)  DATA(\IEN\)=pointer to file 220.5 (only for update records)  DATA(\PROVNUM\)=8 character Dental Provider Number  DATA(\INACTIVE\)=-1 if inactive, else = 0.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}