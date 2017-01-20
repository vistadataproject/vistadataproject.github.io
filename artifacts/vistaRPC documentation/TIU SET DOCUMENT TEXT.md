---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU SET DOCUMENT TEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU SET DOCUMENT TEXT{:/}
 tag | {::nomarkdown}SETTEXT{:/}
 routine | [TIUSRVPT](http://code.osehra.org/dox/Routine_TIUSRVPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC buffers the transmittal of text (i.e., the body of TIU Documents)from the Client to the Server. It allows documents of indefinite size tobe filed, without risk of an allocate error on the M Server.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the TIU Document in the TIU DOCUMENT file (#8925).{:/} | 
| {::nomarkdown}TIUX{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the array in which the body of the TIU Document is being passed,as:                  TIUX(\HDR\)=<# of Current Page>^<Total # of Pages>                TIUX(\TEXT\,1,0)=<Line 1 of document body>                TIUX(\TEXT\,2,0)=<Line 2 of document body>                TIUX(\TEXT\,3,0)=<Line 3 of document body>                        .                       .                        .                       .                        .                       .                TIUX(\TEXT\,i,0)=<Line i of document body>{:/} | 
| {::nomarkdown}SUPPRESS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Optional parameter.  Default is 0 (no). Boolean flag that indicates whether to commit the data (as in the Save w/osignature action in CPRS), or to simply save it in the EDIT BUFFER for thedocument (as in the auto-save function).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SETTEXT^[TIUSRVPT](http://code.osehra.org/dox/Routine_TIUSRVPT_source.html)
 Method comment | Save Text - use Buffered I/O
 Input parameters | {::nomarkdown}TIUDA, TIUX, SUPPRESS{:/}
 Code | {::nomarkdown}  N PAGES,PAGE S TIUY=0,SUPPRESS=$G(SUPPRESS,0)<br> I $S(+$G(TIUDA)'>0:1,'$D(^TIU(8925,+TIUDA,0)):1,1:0) D  Q<br> . S TIUY="0^0^0^Attempt to file data in a Nonexistent Entry."<br> . D ERROR(TIUY)<br> S PAGE=$P($G(TIUX("HDR")),U),PAGES=$P($G(TIUX("HDR")),U,2)<br> I $S('PAGE:1,'PAGES:1,1:0) D  Q<br> . S TIUY="0^0^0^Invalid text block header"<br> . D ERROR(TIUY)<br> I PAGE=1 K ^TIU(8925,+TIUDA,"TEMP")<br> M ^TIU(8925,+TIUDA,"TEMP")=TIUX("TEXT")<br> I 'SUPPRESS,(PAGE=PAGES),$D(^TIU(8925,TIUDA,"TEMP")) D<br> . N TIUC,TIUI,TIU,TIUD12,TIUAU,TIUEC S (TIUC,TIUI)=0<br> . F  S TIUI=$O(^TIU(8925,TIUDA,"TEMP",TIUI)) Q:+TIUI'>0  D<br> . . S TIUC=TIUC+1<br> . I TIUC>0 S ^TIU(8925,TIUDA,"TEMP",0)="^^"_TIUC_U_TIUC_U_DT_"^^"<br> . D GETTIU^TIULD(.TIU,TIUDA)<br> . K ^TIU(8925,TIUDA,"TEXT")<br> . S TIUC=0 F  S TIUC=$O(^TIU(8925,"DAD",TIUDA,TIUC)) Q:+TIUC'>0  D<br> . . I +$$ISADDNDM^TIULC1(+TIUC) Q<br> . . K ^TIU(8925,+TIUC,"TEXT")<br> . D MERGTEXT^TIUEDI1(+TIUDA,.TIU)<br> . K ^TIU(8925,TIUDA,"TEMP")<br> . ; If user is neither author or expected cosigner, file VBC Line count<br> . S TIUD12=$G(^TIU(8925,TIUDA,12)),TIUAU=$P(TIUD12,U,2),TIUEC=$P(TIUD12,U,8)<br> . I (TIUAU]""),(DUZ'=TIUAU) D<br> . . I (TIUEC]""),(DUZ=TIUEC) Q<br> . . D LINES(TIUDA)<br> S TIUY=TIUDA_U_PAGE_U_PAGES{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}