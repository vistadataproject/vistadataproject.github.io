---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU PRINT RECORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU PRINT RECORD{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [TIUPD](http://code.osehra.org/dox/Routine_TIUPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows Printing of TIU Documents on demand.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number of the document in the TIU DOCUMENT FILE(#8925). It uniquely identifies the document to be printed.{:/} | 
| {::nomarkdown}TIUIO{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the NAME of the device to which the document is to be printed. NOTE: You may not pass the $I for the device, or the Pointer to the DEVICEFILE entry corresponding to the device.  ONLY THE DEVICE NAME will work.{:/} | 
| {::nomarkdown}TIUFLAG{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a flag which tells the print driver to specify a CHART versus WORKcopy of the document.  If it is undefined or its value is 0, then theprinted copy will be marked as a WORK COPY.  If its value is 1, then itwill be marked as a CHART COPY.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | RPC^[TIUPD](http://code.osehra.org/dox/Routine_TIUPD_source.html)
 Method comment | Remote Procedure to print a record
 First comment | {::nomarkdown}TIUFLAG > 1 Chart Copy, TIUFLAG = 2 Electronically signed Chart Copy<br/>TIUWIN = 1 Windows printer, 0 or "" VistA printer{:/}
 Input parameters | {::nomarkdown}TIUDA<br>TIUIO<br>TIUFLAG<br>TIUWIN{:/}
 Code | {::nomarkdown}  N DFN,TIUD0,TIUX,ZTIO,ZTDTH,ZTRTN,ZTSK,ZTDESC,TIUTYPE,TIUPMTHD,TIUTNM<br> N TIUDATE,TIUPFHDR,TIUPFNBR,TIUPGRP,TIUD13,TIUD15,TIUIDDAD<br> K ^TMP("TIUPR",$J)<br> I '$D(^TIU(8925,+$G(TIUDA),0)) S TIUY="1^No such record in TIU" Q<br> I $G(TIUIO)']"" S TIUY="1^No device selected" Q<br> S TIUD0=$G(^TIU(8925,+TIUDA,0)),TIUD13=$G(^TIU(8925,+TIUDA,13))<br> S TIUD15=$G(^TIU(8925,+TIUDA,15)),TIUTYPE=+TIUD0,TIUFLAG=+$G(TIUFLAG)<br> S TIUDATE=$S(+TIUD15>0:+TIUD15,+TIUD13>0:+TIUD13,1:+$G(DT))<br> I '+TIUTYPE Q<br> S DFN=+$P(TIUD0,U,2)<br> S TIUTNM=$$PNAME^TIULC1(+TIUTYPE)<br> S TIUPMTHD=$$PRNTMTHD^TIULG(+TIUTYPE,TIUDA)<br> S TIUPGRP=$$PRNTGRP^TIULG(+TIUTYPE,TIUDA)<br> S TIUPFHDR=$$PRNTHDR^TIULG(+TIUTYPE,TIUDA)<br> S TIUPFNBR=$$PRNTNBR^TIULG(+TIUTYPE,TIUDA)<br> I +$$ISADDNDM^TIULC1(TIUDA) S TIUDA=+$P($G(^TIU(8925,+TIUDA,0)),U,6)<br> S TIUIDDAD=$$HASIDDAD^TIUGBR(TIUDA)<br> I TIUIDDAD S TIUDA=TIUIDDAD<br> I $G(TIUPMTHD)']"" S TIUY="1^No Print Method Defined" Q<br> S ^TMP("TIUPR",$J,+$G(TIUPGRP)_"$"_$G(TIUPFHDR)_";"_DFN,1,TIUDA)=$G(TIUPFNBR)<br> I +$G(TIUWIN) D<br> . U IO<br> . X TIUPMTHD<br> E  D<br> . S ZTIO=TIUIO,ZTDTH=$H<br> . S ZTDESC=$S(+TIUFLAG:"CHART",1:"WORK")_" copy of "_$$UPPER^TIULS(TIUTNM)<br> . S ZTRTN=$P(TIUPMTHD," ",2),ZTSAVE("^TMP(""TIUPR"",$J,")=""<br> . S ZTSAVE("TIUFLAG")="",ZTSAVE("TIUPRM*")="",ZTSAVE("DUZ(")=""<br> . D ^%ZTLOAD ;K ^TMP("TIUPR",$J,+$P(TIUD0,U,2),1,TIUDA) P182<br> . I $D(ZTSK) S TIUY="0^"_$S(+$G(TIUFLAG):"Chart",1:"Draft")_" copy queued"<br> . E  S TIUY="1^Task Rejected"<br> K ^TMP("TIUPR",$J,+$G(TIUPGRP)_"$"_$G(TIUPFHDR)_";"_DFN,1,TIUDA) ;P182{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}