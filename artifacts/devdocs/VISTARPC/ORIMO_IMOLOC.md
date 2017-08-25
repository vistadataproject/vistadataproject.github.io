---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORIMO IMOLOC<br/>
# ORIMO IMOLOC



## Properties

Property | Value
--- | ---
Label | IMOLOC
MUMPS Implementation | [ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [IMOLOC^ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
Method Comment | ORY&gt;&#x3D;0: LOC is an IMO authorized location
Input Parameters | ORLOC, ORDFN
Code | {::nomarkdown}<pre><code> S ORY=-1<br/> N PACH,A<br/> K ^TMP($J,"ORIMO")<br/> S PACH=$$PATCH^XPDUTL("PSJ*5.0*111")<br/> Q:'PACH<br/> I $L($TEXT(SDIMO^SDAMA203)) D<br/> . ;#DBIA 4133<br/> . S ORY=$$SDIMO^SDAMA203(ORLOC,ORDFN)<br/> . ;if RSA returns an error then check against Clinic Loc.<br/> . I ORY=-3 D<br/> . .I $P($G(^SC(ORLOC,0)),U,3)'="C" Q<br/> . .I $D(^SC("AE",1,ORLOC))=1 S ORY=1<br/> . K SDIMO(1)<br/> I $D(^TMP($J,"OR MOB APP1")) K ^("OR MOB APP1") D ALL^PSJ53P46(+ORLOC,"ORIMO") S A=$G(^TMP($J,"ORIMO",0)) I A'>0!(+$G(^TMP($J,"ORIMO",A,3))=0) S ORY=-1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}