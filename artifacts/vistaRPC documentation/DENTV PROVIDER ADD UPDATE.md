---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV PROVIDER ADD UPDATE 

 property | value 
--- | --- 
 label | DENTV PROVIDER ADD UPDATE
 tag | EDIT
 routine | [DENTVRP5](http://code.osehra.org/dox/Routine_DENTVRP5_source.html)
 return value type | SINGLE VALUE
 description | This RPC allows Dental Record Manager to add/edit their Dental Providers.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LIST |  | true | The input array contains the Dental Provider information to be added/updated into file 220.5.  The following fields are sent:  DATA(\PERSON\)=pointer to file 200 (PERSON)  DATA(\IEN\)=pointer to file 220.5 (only for update records)  DATA(\PROVNUM\)=8 character Dental Provider Number  DATA(\INACTIVE\)=-1 if inactive, else = 0. | 




Generated on January 11th 2017, 6:34:23 am