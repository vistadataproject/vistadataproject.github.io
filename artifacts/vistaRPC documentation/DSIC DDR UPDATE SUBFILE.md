---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC DDR UPDATE SUBFILE 

 property | value 
--- | --- 
 label | DSIC DDR UPDATE SUBFILE
 tag | UPDATE1
 routine | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
 return value type | ARRAY
 description | This will add a new record to a multiple in a file.   The multiple can be at any level as long as the IENS is properly defined.  Additional fields can filed with the record.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL | 20 | true | This is the number of the subfile to which a new record is to be added | 
| IENS | LITERAL | 50 | true | This is the standard Fileman DBS parameter for calling UPDATE^DIE when adding a record to a multiple in a file.  If IENS is not passed or is passed as <null>, then this will add the record at the top level of the file. | 
| DATA | LIST | 250 | true | This is a list of fields and their internal values to be filed with thenew record.  Obviously the .01 field should have a value to be filed.  Theformat of the DATA array: DATA(field#)=value On the GUI side this would be:  Param.List['field#'] := value | 