---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV FM GET FIELD ATTRIB
# DSIV FM GET FIELD ATTRIB

This will return the inputted field attributes for a file.  As of 7/29/2003, these attributes are available: AUDIT AUDIT CONDITION COMPUTE ALGORITHM COMPUTED FIELDS USED DATE FIELD LAST EDITED DECIMAL DEFAULT DELETE ACCESS DESCRIPTION FIELD LENGTH GLOBAL SUBSCRIPT LOCATION HELP-PROMPT INPUT TRANSFORM LABEL MULTIPLE-VALUED OUTPUT TRANSFORM POINTER READ ACCESS SOURCE SPECIFIER TECHNICAL DESCRIPTION TITLE TYPE WRITE ACCESS XECUTABLE HELP

Property | Value
--- | ---
Label | FIELD
Routine | [DSIVFM06](http://code.osehra.org/dox/Routine_DSIVFM06_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 30 | true |  This can be the file number or the full name of the file.  For subfiles, it must be the subfile number.
FIELD | LITERAL | 30 | true |  This is the field number or the full name of the field
FLAG | LITERAL | 2 | true |  This is a flag controlling what will be returned. The default value is &lt;null&gt;.  FLAG can contain N. If FLAG contains N then do not return attributes whose value is &lt;null&gt; If FLAGS contains Z, then for WOrd Processing attributes, include   the zeroth node with the text
ATT | LIST | 30 | true |  This is a list of attributes to return.   List[n] :&#x3D; attribute name  where n&#x3D;0,1,2,3,...  You can send List[0] :&#x3D; &quot;*&quot; to get all field attributes



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}