---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU2 COSIGNER<br/>
# ORWU2 COSIGNER

Returns a set of New Person file entries for use in a long list box.The set is limited to USR PROVIDERS who do not require cosignature.

## Properties

Property | Value
--- | ---
Label | COSIGNER
MUMPS Implementation | [ORWU2](http://code.osehra.org/dox/Routine_ORWU2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORDATE | LITERAL |  |  | Fileman date that the user will be required to be active on. (optional)
ORDIR | LITERAL |  | true | Direction to move through the #200 x-ref with $O.
ORFROM | LITERAL |  |  | Starting name for this set.
ORTIUTYP | LITERAL |  | true | is + of the 0 node of the 8925 docmt
ORTIUDA | LITERAL |  | true | This is the record # of the TIU Document in file 8925.



## MUMPS Method Description

Property | Value
--- | ---
Method | [COSIGNER^ORWU2](http://code.osehra.org/dox/Routine_ORWU2_source.html)
Input Parameters | ORFROM, ORDIR, ORDATE, ORTIUTYP, ORTIUDA
First Comment | {::nomarkdown}<pre><code> (Set up for the DC Summary)<br/>  (to use TIU doc requirments and USR PROVIDER)<br/><br/> PARAMS from ORWU2 COSIGNER RPC call:<br/>  .ORY=returned list.<br/>  ORFROM=Starting name for this set.  <br/>  ORDIR=Direction to move through the x-ref with $O.  <br/>  ORDATE=Checks for an USR PROVIDER on this date (optional).<br/>  ORTIUTYP is + of the 0 node of the 8925 docmt.  <br/>  ORTIUDA is the docmt IEN,<br/>  <br/>  <br/>  </code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORDD,ORDIV,ORDUP,ORGOOD,ORI,ORIEN1,ORIEN2,ORLAST,ORMAX,ORMRK,ORMULTI,ORPREV,ORSRV,ORTTL,ORERR<br/> S ORI=0,ORMAX=44,(ORLAST,ORPREV)="",ORDATE=$G(ORDATE) ;ORKEY=$G(ORKEY)<br/> I +$G(ORTIUDA) S ORTIUTYP=+$G(^TIU(8925,+$G(ORTIUDA),0))<br/> S ORMULTI=$$ALL^VASITE ; IA# 10112.  Do once at beginning of call.<br/> F  Q:ORI'<ORMAX  S ORFROM=$O(^VA(200,"AUSER",ORFROM),ORDIR) Q:ORFROM=""  D<br/> .S ORIEN1=""<br/> .F  S ORIEN1=$O(^VA(200,"AUSER",ORFROM,ORIEN1),ORDIR) Q:'ORIEN1  D<br/> ..;<br/> ..I '$$PROVIDER^XUSER(ORIEN1,1) Q   ; Terminated? <br/> ..I '$$ISA^USRLM(+ORIEN1,"PROVIDER",.ORERR,ORDATE) Q  ;(USR PROVIDER CLASS CHECK?)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}