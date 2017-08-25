---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQPT READ RPL<br/>
# ORQPT READ RPL

Passes global reference and other parameters, and receives a list of patients (up to 44 maximum) with IENs, for use in scrolling a Long List Box (LLB) componenet.

## Properties

Property | Value
--- | ---
Label | RPLREAD
MUMPS Implementation | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [RPLREAD^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
Method Comment | Read disk-based patient array from TMP.
Input Parameters | ORJ, ORFROM, ORDIR
First Comment | {::nomarkdown}<pre><code><br/> Variables used:<br/><br/>   ORCNT   = Counter variable.<br/>   ORDIR   = Direction to move through list.<br/>   ORFROM  = Starting point from which to move through list.<br/>   ORI     = Counter variable.<br/>   ORIEN   = Record IEN holder.<br/>   ORJ     = Job number to use in ^TMP global root.<br/>   ORROOT  = ^TMP global file root.<br/>   ORZ     = Temporary value holder.<br/>   Y       = Returned array.<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORCNT,ORI,ORIEN,ORROOT,ORZ<br/> I $P(ORFROM,U,2)'="" S ORFROM=$P(ORFROM,U,2)<br/> S ORROOT="^TMP("_"""ORRPL"""_","_ORJ      ; Initial setting.<br/> S ORROOT=ORROOT_","_"""B"""               ; Add final text.<br/> I '$D(@(ORROOT_")")) S Y(0)="No data available." Q<br/> S ORROOT=ORROOT_","                       ; Add comma.<br/> S ORCNT=44                                ; Initialize to maximum.<br/> S ORI=0                                   ; Initialize.<br/> F  S ORFROM=$O(@(ORROOT_""""_ORFROM_""""_")"),ORDIR) Q:ORFROM=""  D  Q:ORI=ORCNT<br/> .;<br/> .; Sub-loop for entries up to ORCNT maximum:<br/> .S ORIEN=0                                ; Initialize.<br/> .F  S ORIEN=$O(@(ORROOT_""""_ORFROM_""""_","_ORIEN_")")) Q:'ORIEN  D  Q:ORI=ORCNT<br/> ..S ORI=ORI+1                             ; Increment counter.<br/> ..;<br/> ..; Assign return array:<br/> ..S Y(ORI)=@(ORROOT_""""_ORFROM_""""_","_ORIEN_")")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}