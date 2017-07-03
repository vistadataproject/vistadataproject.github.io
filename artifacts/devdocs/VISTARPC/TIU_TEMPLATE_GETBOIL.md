---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU TEMPLATE GETBOIL
# TIU TEMPLATE GETBOIL



Property | Value
--- | ---
Label | GETBOIL
Routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETBOIL^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Method Comment | Returns a Template&#x27;s Unexpanded Boilerplate Text
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> N IDX,LINE,TYPE<br/> K ^TMP("TIU TEMPLATE",$J)<br/> S TIUY=$NA(^TMP("TIU TEMPLATE",$J))<br/> S (IDX,LINE)=0<br/> S TYPE=$P($G(^TIU(8927,TIUDA,0)),U,3)<br/> I (TYPE="T")!(TYPE="G") D<br/> .F  S LINE=$O(^TIU(8927,TIUDA,2,LINE)) Q:'LINE  D<br/> ..S IDX=IDX+1<br/> ..S ^TMP("TIU TEMPLATE",$J,IDX)=$G(^TIU(8927,TIUDA,2,LINE,0))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}