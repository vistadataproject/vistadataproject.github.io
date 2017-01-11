---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU FIELD CHECK 

 property | value 
--- | --- 
 label | TIU FIELD CHECK
 tag | CHKFLD
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | ARRAY
 description | Very similar to IMPORT^TIUSRVF, except does not save template fields.Resolves self referencing loops, and takes into account fields withthe same name already saved.


### Method description

 property | value 
--- | --- 
 Method comment | Input: <None>
 Leading comment lines | Output: RESULT (see below for description),Similar to IMPORT^TIUSRVF; takes and parses XML fields to,see if they have a matching field in the database.  Also resolves self,referencing fields, and updates the XML.  Returns RESULT, which is a ,list of fields in format ORIGINAL_FIELD_NAME^CODE^NEW_FIELD_NAME.,If the CODE is 1 or 2, then the NEW_FIELD_NAME is blank.  If the CODE,is 0, then the NEW_FIELD_NAME has the renamed field name.  In that ,case, the XML has been updated with the new name where ever the ,original name had occurred.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RECSET | LIST |  |  |  | 




 Generated on January 11th 2017, 7:15:04 am