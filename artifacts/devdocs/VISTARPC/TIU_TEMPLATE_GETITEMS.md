---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU TEMPLATE GETITEMS
# TIU TEMPLATE GETITEMS



Property | Value
--- | ---
Label | GETITEMS
Routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETITEMS^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Method Comment | Returns all children of a non-Template Node
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> N IDX,ITEM,SEQ,ITEMNODE<br/> K ^TMP("TIU TEMPLATE",$J)<br/> S TIUY=$NA(^TMP("TIU TEMPLATE",$J))<br/> I $P($G(^TIU(8927,TIUDA,0)),U,3)'="T" D<br/> .S (IDX,SEQ)=0<br/> .F  S SEQ=$O(^TIU(8927,TIUDA,10,"B",SEQ)) Q:'SEQ  D<br/> ..S ITEM=0<br/> ..F  S ITEM=$O(^TIU(8927,TIUDA,10,"B",SEQ,ITEM)) Q:'ITEM  D<br/> ...S ITEMNODE=$G(^TIU(8927,TIUDA,10,ITEM,0))<br/> ...D ADDNODE(.IDX,$P(ITEMNODE,U,2))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}