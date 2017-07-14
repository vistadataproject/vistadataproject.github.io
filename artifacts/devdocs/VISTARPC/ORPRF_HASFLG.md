---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORPRF HASFLG<br/>
# ORPRF HASFLG



## Properties

Property | Value
--- | ---
Label | HASFLG
Routine | [ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [HASFLG^ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
Method Comment | Does patient PTDFN has flags
Input Parameters | PTDFN
First Comment | {::nomarkdown}<pre><code>     DBIA 3860: $$GETACT^DGPFAPI(PTDFN,.FLGDATA)<br/> Returns array ORY listing active assigned flags<br/> Array ORY has form:<br/>   ORY(flagID) = flagID^flagname,CAT1<br/>      where CAT1 is 1 if flag is cat 1, 0 if cat 2<br/> ORY = Num of items returned in array ORY = num of flags</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I '$L($TEXT(GETACT^DGPFAPI)) S ORY=0 Q<br/> N IDY,PRFARR,CAT1<br/> K ^TMP("ORPRF",$J)<br/> S ORY=$$GETACT^DGPFAPI(PTDFN,"PRFARR")<br/> Q:'ORY<br/> D FMT(.@("PRFARR")) ; Sets ^TMP("ORPRF"<br/> S IDY=0 F  S IDY=$O(^TMP("ORPRF",$J,IDY)) Q:'IDY  D<br/> . S ORY(IDY)=IDY_U_$G(^TMP("ORPRF",$J,IDY,"FLAG"))<br/> . S CAT1=0<br/> . I $G(^TMP("ORPRF",$J,IDY,"CATEGORY"))="I (NATIONAL)" S CAT1=1<br/> . S ORY(IDY)=ORY(IDY)_U_CAT1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/uOrPtf.pas">uOrPtf.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}