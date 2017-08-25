---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWUL FVSUB<br/>
# ORWUL FVSUB



## Properties

Property | Value
--- | ---
Label | FVSUB
MUMPS Implementation | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [FVSUB^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
Method Comment | return subset of orders in view
Input Parameters | IEN, FIRST, LAST
Code | {::nomarkdown}<pre><code> N I<br/> F I=FIRST:1:LAST D<br/> .;AGP change returned valued to returned data or @ if record does not<br/> .;exist. The @ sign is used by the delphi code to identified a<br/> .;non-existence record<br/> .S LST(I)=$S($D(^ORD(101.44,IEN,20,$G(I)))>0:^ORD(101.44,IEN,20,I,0),1:"@")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}