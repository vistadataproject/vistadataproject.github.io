---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWCH SAVEALL<br/>
# ORWCH SAVEALL

This RPC saves the sizing related CPRS GUI chart parameters for theuser.

## Properties

Property | Value
--- | ---
Label | SAVEALL
MUMPS Implementation | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SAVEALL^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
Method Comment | save the list of sizing information
Input Parameters | LST
Code | {::nomarkdown}<pre><code> N I,TYP,NAM,VAL,PAR,ORERR<br/> S (I,OK)="" F  S I=$O(LST(I)) Q:'I  D<br/> . S TYP=$P(LST(I),U),NAM=$P(LST(I),U,2),VAL=$P(LST(I),U,3)<br/> . S PAR="ORWCH "_$S(TYP="B":"BOUNDS",TYP="W":"WIDTH",TYP="C":"COLUMNS")<br/> . D EN^XPAR(DUZ_";VA(200,",PAR,NAM,VAL,.ORERR)<br/> . I ORERR S OK=OK_LST(I)_":"_ORERR_U<br/> K ^TMP("ORWCHART",$J),^TMP("ORECALL",$J),^TMP("ORWORD",$J)<br/> K ^TMP("ORWDXMQ",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas">rMisc.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}