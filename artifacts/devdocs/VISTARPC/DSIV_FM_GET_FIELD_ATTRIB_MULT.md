---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV FM GET FIELD ATTRIB MULT
# DSIV FM GET FIELD ATTRIB MULT

This will return field attributes from a selected file for one or more fields.

Property | Value
--- | ---
Label | MULT
Routine | [DSIVFM06](http://code.osehra.org/dox/Routine_DSIVFM06_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIN | LIST | 50 | true |  DSIN(i) :&#x3D; label ^ value   for i &#x3D; 0,1,2,3,4,...  Label can be one of five values:   FILE - req - file (or subfile) number or file name    FLAG - opt - N or &lt;null&gt;   - default value is &lt;null&gt;                if FLAG[&quot;N&quot; - do not return attributes which are &lt;null&gt;     ATT - req - list of field attributes to return                this can be a &#x27;;&#x27;-delimited string of field attribute                 names or individual field attribute names                 Examples: DSIN(i)&#x3D;&quot;ATT^LABEL;TYPE;GLOBAL LOCATION;&quot;                          DSIN(i)&#x3D;&quot;ATT^SPECIFIER&quot;                          DSIN(i)&#x3D;&quot;ATT^*&quot; - the &#x27;*&#x27; means get all field                                    attrib    FIELD - req - field number or field name                 Examples: DSIN(i)&#x3D;&quot;FIELD^.01&quot;                           DSIN(i)&#x3D;&quot;FIELD^.01;.02;.03;.09&quot;                           DSIN(i)&#x3D;&quot;FIELD^.01:.09&quot;                           DSIN(i)&#x3D;&quot;FIELD^.01;.02;.03;1:9;99&quot;                 Field numbers (or names) can be separated by &#x27;;&#x27;                 An inclusive range of field numbers is separated by &#x27;:&#x27;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}