---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN FIND CONSULT<br/>
# ORQQCN FIND CONSULT

Given a Consult IEN in file 123, return a formatted list item for thatsingle consult only, in the same format as returned by ORQQCN LIST.

## Properties

Property | Value
--- | ---
Label | FINDCSLT
Routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMRCO | LITERAL | 16 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [FINDCSLT^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Method Comment | Return list item for the selected consult only
Input Parameters | GMRCIEN
Code | {::nomarkdown}<pre><code> N ORPT,X0,GMRCOER,SEQ,SEQ0<br/> Q:+$G(GMRCIEN)=0<br/> S X0=$G(^GMR(123,GMRCIEN,0)) I 'X0 S Y="-1^Consult not found" Q<br/> S ORPT=$P(X0,U,2) I '$G(ORPT) S Y="-1^Patient not found" Q<br/> S GMRCOER=2,SEQ=""<br/> D OER^GMRCSLM1(ORPT,"","","","",GMRCOER)<br/> F  S SEQ=$O(^TMP("GMRCR",$J,"CS",SEQ)) Q:SEQ=""!(SEQ?1A.E)  I SEQ>0 D<br/> .S SEQ0=^TMP("GMRCR",$J,"CS",SEQ,0) I $P(SEQ0,U,1)=GMRCIEN S Y=SEQ0 Q<br/> K ^TMP("GMRCR",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}