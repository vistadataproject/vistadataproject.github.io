---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV UPDATE SUBFILE MULT 

 property | value 
--- | --- 
 label | DSIV UPDATE SUBFILE MULT
 tag | ADDUPD
 routine | [DSIVIC2](http://code.osehra.org/dox/Routine_DSIVIC2_source.html)
 return value type | ARRAY
 description | Allows editing of multiple entries in a FileMan multiple at one time.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL | 20 | true | Contains the file# to add/edit data. | 
| IEN | LITERAL | 30 | true | Contains the IEN of the entry to add/edit. | 
| DATA | LIST | 50 | true | Array holding entries for adding:   DATA(n)=$START   DATA(n)=field^value   DATA(n)=field^value   DATA(n)=$END  for updating:    DATA(n)=$START    DATA(n)=SubfieldIEN^field^value    DATA(n)=SubfieldIEN^field^value    DATA(n)=$END  | 
| FLAG | LITERAL | 1 | true | FLAG=0 to add entries to a multiple,FLAG=1 to update entries in a multiple. | 




 ###### Generated on January 11th 2017, 6:39:43 am