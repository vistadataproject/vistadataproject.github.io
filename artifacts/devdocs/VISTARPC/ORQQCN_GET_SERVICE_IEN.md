---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN GET SERVICE IEN<br/>
# ORQQCN GET SERVICE IEN



## Properties

Property | Value
--- | ---
Label | SVCIEN
MUMPS Implementation | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORIEN | LITERAL | 16 |  | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [SVCIEN^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | Given orderable item file entry, return IEN in 123.5, OR -1 IF INACTIVE IN 101.43
Input Parameters | ORIEN
Code | {::nomarkdown}<pre><code> N X1<br/> I '$D(^ORD(101.43,ORIEN)) S ORY=-1 Q<br/> S X1=$G(^ORD(101.43,ORIEN,.1))<br/> I +X1,+X1<$$NOW^XLFDT S ORY=-1 Q<br/> S ORY=$P($$USID^ORWDXC(ORIEN),U,4)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}