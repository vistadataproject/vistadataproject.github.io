---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC DDR UPDATE FILE 

 property | value 
--- | --- 
 label | DSIC DDR UPDATE FILE
 tag | UPDATE
 routine | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
 return value type | ARRAY
 description | This will add a new record to a file, but only at the top level of the file.   It does not allow for adding a new record to a multiple.  Additional fields to be filed at the same time can be passed.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL | 20 | true | This is the number of the file for which a new record is to be added | 
| DATA | LIST | 250 | true | This is a list of fields which will have data for filing with the new record.  Obviously the .01 field must be present.  Format of data array:  DATA(field#)=internal value   On the GUI side, Param.List['field#']= value | 