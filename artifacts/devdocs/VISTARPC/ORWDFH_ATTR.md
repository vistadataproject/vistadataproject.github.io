---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDFH ATTR<br/>
# ORWDFH ATTR

For a diet order, this RPC returns:  Orderable Item^Text^Type^Precedence^AskExpire 

## Properties

Property | Value
--- | ---
Label | ATTR
MUMPS Implementation | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ATTR^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Method Comment | Return OI^Text^Type^Precedence^AskExpire for a diet
Input Parameters | OI
Code | {::nomarkdown}<pre><code> I $G(^ORD(101.43,OI,.1)),^(.1)'>$$NOW^XLFDT S REC="0^"_$P($G(^ORD(101.43,OI,0)),U)_" has been inactivated and may not be ordered anymore." Q<br/> S REC=OI_U_$P($G(^ORD(101.43,OI,0)),U)_U_$G(^("FH"))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}