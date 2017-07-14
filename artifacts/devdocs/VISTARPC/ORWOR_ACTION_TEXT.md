---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWOR ACTION TEXT<br/>
# ORWOR ACTION TEXT



## Properties

Property | Value
--- | ---
Label | ACTXT
Routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ACTXT^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Method Comment | Return detail action information
Input Parameters | ORIFN
Code | {::nomarkdown}<pre><code> N ORI,CNT,OR0,OR3,OR6,ACTION<br/> K ^TMP("ORACTXT",$J)<br/> S ORY="^TMP(""ORACTXT"",$J)",ORI=$P(ORIFN,";",2)<br/> S CNT=0,ORIFN=+ORIFN,OR0=$G(^OR(100,ORIFN,0)),OR3=$G(^(3)),OR6=$G(^(6))<br/> F  S ORI=$O(^OR(100,+ORIFN,8,ORI)) Q:ORI'>0  S ACTION=$G(^(ORI,0)) D ACT^ORQ20<br/> S ORY=$NA(^TMP("ORACTXT",$J)),@ORY=""</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}