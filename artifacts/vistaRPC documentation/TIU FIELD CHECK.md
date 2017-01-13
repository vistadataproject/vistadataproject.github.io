---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD CHECK 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD CHECK{:/}
 tag | {::nomarkdown}CHKFLD{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Very similar to IMPORT^TIUSRVF, except does not save template fields.Resolves self referencing loops, and takes into account fields withthe same name already saved.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Input: <None>
 Leading comment lines | {::nomarkdown}Output: RESULT (see below for description)<br/>Similar to IMPORT^TIUSRVF; takes and parses XML fields to<br/>see if they have a matching field in the database.  Also resolves self<br/>referencing fields, and updates the XML.  Returns RESULT, which is a <br/>list of fields in format ORIGINAL_FIELD_NAME^CODE^NEW_FIELD_NAME.<br/>If the CODE is 1 or 2, then the NEW_FIELD_NAME is blank.  If the CODE<br/>is 0, then the NEW_FIELD_NAME has the renamed field name.  In that <br/>case, the XML has been updated with the new name where ever the <br/>original name had occurred.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RECSET{:/} | {::nomarkdown}LIST{:/} |  |  |  | 




 Generated on January 13th 2017, 6:44:47 am