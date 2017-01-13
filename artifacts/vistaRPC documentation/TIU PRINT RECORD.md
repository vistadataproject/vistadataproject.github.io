---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU PRINT RECORD 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU PRINT RECORD{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [TIUPD](http://code.osehra.org/dox/Routine_TIUPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows Printing of TIU Documents on demand.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Remote Procedure to print a record
 Input Parameters | {::nomarkdown}TIUDA<br/>TIUIO<br/>TIUFLAG<br/>TIUWIN{:/}
 Lines | ```
 N DFN,TIUD0,TIUX,ZTIO,ZTDTH,ZTRTN,ZTSK,ZTDESC,TIUTYPE,TIUPMTHD,TIUTNM
 N TIUDATE,TIUPFHDR,TIUPFNBR,TIUPGRP,TIUD13,TIUD15,TIUIDDAD
 K ^TMP("TIUPR",$J)
 I '$D(^TIU(8925,+$G(TIUDA),0)) S TIUY="1^No such record in TIU" Q
 I $G(TIUIO)']"" S TIUY="1^No device selected" Q
 S TIUD0=$G(^TIU(8925,+TIUDA,0)),TIUD13=$G(^TIU(8925,+TIUDA,13))
 S TIUD15=$G(^TIU(8925,+TIUDA,15)),TIUTYPE=+TIUD0,TIUFLAG=+$G(TIUFLAG)
 S TIUDATE=$S(+TIUD15>0:+TIUD15,+TIUD13>0:+TIUD13,1:+$G(DT))
 I '+TIUTYPE Q
 S DFN=+$P(TIUD0,U,2)
 S TIUTNM=$$PNAME^TIULC1(+TIUTYPE)
 S TIUPMTHD=$$PRNTMTHD^TIULG(+TIUTYPE,TIUDA)
 S TIUPGRP=$$PRNTGRP^TIULG(+TIUTYPE,TIUDA)
 S TIUPFHDR=$$PRNTHDR^TIULG(+TIUTYPE,TIUDA)
 S TIUPFNBR=$$PRNTNBR^TIULG(+TIUTYPE,TIUDA)
 I +$$ISADDNDM^TIULC1(TIUDA) S TIUDA=+$P($G(^TIU(8925,+TIUDA,0)),U,6)
 S TIUIDDAD=$$HASIDDAD^TIUGBR(TIUDA)
 I TIUIDDAD S TIUDA=TIUIDDAD
 I $G(TIUPMTHD)']"" S TIUY="1^No Print Method Defined" Q
 S ^TMP("TIUPR",$J,+$G(TIUPGRP)_"$"_$G(TIUPFHDR)_";"_DFN,1,TIUDA)=$G(TIUPFNBR)
 I +$G(TIUWIN) D
 . U IO
 . X TIUPMTHD
 E  D
 . S ZTIO=TIUIO,ZTDTH=$H
 . S ZTDESC=$S(+TIUFLAG:"CHART",1:"WORK")_" copy of "_$$UPPER^TIULS(TIUTNM)
 . S ZTRTN=$P(TIUPMTHD," ",2),ZTSAVE("^TMP(""TIUPR"",$J,")=""
 . S ZTSAVE("TIUFLAG")="",ZTSAVE("TIUPRM*")="",ZTSAVE("DUZ(")=""
 . D ^%ZTLOAD ;K ^TMP("TIUPR",$J,+$P(TIUD0,U,2),1,TIUDA) P182
 . I $D(ZTSK) S TIUY="0^"_$S(+$G(TIUFLAG):"Chart",1:"Draft")_" copy queued"
 . E  S TIUY="1^Task Rejected"
 K ^TMP("TIUPR",$J,+$G(TIUPGRP)_"$"_$G(TIUPFHDR)_";"_DFN,1,TIUDA) ;P182```
 Leading comment lines | {::nomarkdown}TIUFLAG > 1 Chart Copy, TIUFLAG = 2 Electronically signed Chart Copy<br/>TIUWIN = 1 Windows printer, 0 or "" VistA printer{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number of the document in the TIU DOCUMENT FILE(#8925). It uniquely identifies the document to be printed.{:/} | 
| {::nomarkdown}TIUIO{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the NAME of the device to which the document is to be printed. NOTE: You may not pass the $I for the device, or the Pointer to the DEVICEFILE entry corresponding to the device.  ONLY THE DEVICE NAME will work.{:/} | 
| {::nomarkdown}TIUFLAG{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a flag which tells the print driver to specify a CHART versus WORKcopy of the document.  If it is undefined or its value is 0, then theprinted copy will be marked as a WORK COPY.  If its value is 1, then itwill be marked as a CHART COPY.{:/} | 




 Generated on January 13th 2017, 6:55:28 am