---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV DDR FILER 

 property | value 
--- | --- 
 label | DSIV DDR FILER
 tag | FILE
 routine | [DSIVDDR0](http://code.osehra.org/dox/Routine_DSIVDDR0_source.html)
 return value type | ARRAY
 description |  This calls FILE^DIE to file data.  It can only file data at a single level (top, multiple, a multiple within a multiple, etc.).  It presumes you know how to set Param[x] properly in Fileman syntax.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILE | LITERAL | 15 | true |  This is the file number (or subfile number) for which data is to be filed. | 
| vs:Input_Parameter-8994_02 | IENS | LITERAL | 40 | true |  This is the IENS parameter to the FILE^DIE call.   If you are filing data to a file at top level fields, then IENS must be <null>.   If you are filing data to a subfile entry then IENS must be properly defined. | 
| vs:Input_Parameter-8994_02 | FLAGS | LITERAL | 10 | true |  This is the FLAGS parameter used when invoking FILE^DIE. If no value is passed, then the default value is \KE\ | 
| vs:Input_Parameter-8994_02 | DATA | LIST | 250 | true |  This is an array of fields in format:  DATA(field_num)=value | 