---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU PRINT RECORD<br/>
# TIU PRINT RECORD

Allows Printing of TIU Documents on demand.

## Properties

Property | Value
--- | ---
Label | RPC
Routine | [TIUPD](http://code.osehra.org/dox/Routine_TIUPD_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the record number of the document in the TIU DOCUMENT FILE(#8925). It uniquely identifies the document to be printed.
TIUIO | LITERAL |  | true | This is the NAME of the device to which the document is to be printed. NOTE: You may not pass the $I for the device, or the Pointer to the DEVICEFILE entry corresponding to the device.  ONLY THE DEVICE NAME will work.
TIUFLAG | LITERAL |  | true | This is a flag which tells the print driver to specify a CHART versus WORKcopy of the document.  If it is undefined or its value is 0, then theprinted copy will be marked as a WORK COPY.  If its value is 1, then itwill be marked as a CHART COPY.



## MUMPS Method Description

Property | Value
--- | ---
Method | [RPC^TIUPD](http://code.osehra.org/dox/Routine_TIUPD_source.html)
Method Comment | Remote Procedure to print a record
Input Parameters | TIUDA, TIUIO, TIUFLAG, TIUWIN
First Comment | {::nomarkdown}<pre><code>TIUFLAG > 1 Chart Copy, TIUFLAG = 2 Electronically signed Chart Copy<br/>TIUWIN = 1 Windows printer, 0 or "" VistA printer</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N DFN,TIUD0,TIUX,ZTIO,ZTDTH,ZTRTN,ZTSK,ZTDESC,TIUTYPE,TIUPMTHD,TIUTNM<br/> N TIUDATE,TIUPFHDR,TIUPFNBR,TIUPGRP,TIUD13,TIUD15,TIUIDDAD<br/> K ^TMP("TIUPR",$J)<br/> I '$D(^TIU(8925,+$G(TIUDA),0)) S TIUY="1^No such record in TIU" Q<br/> I $G(TIUIO)']"" S TIUY="1^No device selected" Q<br/> S TIUD0=$G(^TIU(8925,+TIUDA,0)),TIUD13=$G(^TIU(8925,+TIUDA,13))<br/> S TIUD15=$G(^TIU(8925,+TIUDA,15)),TIUTYPE=+TIUD0,TIUFLAG=+$G(TIUFLAG)<br/> S TIUDATE=$S(+TIUD15>0:+TIUD15,+TIUD13>0:+TIUD13,1:+$G(DT))<br/> I '+TIUTYPE Q<br/> S DFN=+$P(TIUD0,U,2)<br/> S TIUTNM=$$PNAME^TIULC1(+TIUTYPE)<br/> S TIUPMTHD=$$PRNTMTHD^TIULG(+TIUTYPE,TIUDA)<br/> S TIUPGRP=$$PRNTGRP^TIULG(+TIUTYPE,TIUDA)<br/> S TIUPFHDR=$$PRNTHDR^TIULG(+TIUTYPE,TIUDA)<br/> S TIUPFNBR=$$PRNTNBR^TIULG(+TIUTYPE,TIUDA)<br/> I +$$ISADDNDM^TIULC1(TIUDA) S TIUDA=+$P($G(^TIU(8925,+TIUDA,0)),U,6)<br/> S TIUIDDAD=$$HASIDDAD^TIUGBR(TIUDA)<br/> I TIUIDDAD S TIUDA=TIUIDDAD<br/> I $G(TIUPMTHD)']"" S TIUY="1^No Print Method Defined" Q<br/> S ^TMP("TIUPR",$J,+$G(TIUPGRP)_"$"_$G(TIUPFHDR)_";"_DFN,1,TIUDA)=$G(TIUPFNBR)<br/> I +$G(TIUWIN) D<br/> . U IO<br/> . X TIUPMTHD<br/> E  D<br/> . S ZTIO=TIUIO,ZTDTH=$H<br/> . S ZTDESC=$S(+TIUFLAG:"CHART",1:"WORK")_" copy of "_$$UPPER^TIULS(TIUTNM)<br/> . S ZTRTN=$P(TIUPMTHD," ",2),ZTSAVE("^TMP(""TIUPR"",$J,")=""<br/> . S ZTSAVE("TIUFLAG")="",ZTSAVE("TIUPRM*")="",ZTSAVE("DUZ(")=""<br/> . D ^%ZTLOAD ;K ^TMP("TIUPR",$J,+$P(TIUD0,U,2),1,TIUDA) P182<br/> . I $D(ZTSK) S TIUY="0^"_$S(+$G(TIUFLAG):"Chart",1:"Draft")_" copy queued"<br/> . E  S TIUY="1^Task Rejected"<br/> K ^TMP("TIUPR",$J,+$G(TIUPGRP)_"$"_$G(TIUPFHDR)_";"_DFN,1,TIUDA) ;P182</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}