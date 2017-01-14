---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWD2 DEVINFO 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWD2 DEVINFO{:/}
 tag | {::nomarkdown}DEVINFO{:/}
 routine | [ORWD2](http://code.osehra.org/dox/Routine_ORWD2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns device information related to a location/nature of order when anorder is signed or released via CPRS GUI.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DEVINFO^[ORWD2](http://code.osehra.org/dox/Routine_ORWD2_source.html)
 Method comment | Return device info when signing/releasing orders
 First comment | {::nomarkdown}Y(0)=Prompt Chart ^ Prompt Label ^ Prompt Requisition ^ Prompt Work<br/>^ Chart Device ^ Label Device ^ Requisition Device ^ Work Device<br/>for Prompt X: *=no print, 0=autoprint, 1=prompt&dev 2=prompt only <br/>Y(n)=ORIFN;ACT ^ Chart ^ Label ^ Requisition ^ Service ^ Work<br/>LOC=location (ptr 44), NATR=nature of order (ptr 100.02)<br/>ORDERS=ORIFN;ACT ^ R | S | E (released, signed, error){:/}
 Input parameters | {::nomarkdown}LOC<br/>NATR<br/>ORDERS{:/}
 Code | ```  N NATCHT,NATWRK,WHENCHT,PRMTCHT,PRMTLBL,PRMTREQ,PRMTWRK
 N DOCHT,DOLBL,DOREQ,DOWRK,RELEASE,ORDERID,I,J,X
 N NDCR,NODE,NPCC,NPWC
 S (DOCHT,DOLBL,DOREQ,DOWRK,I,J)=0,LOC=+LOC_";SC("
 S NATR=$O(^ORD(100.02,"C",NATR,0))
 S NATCHT=+$P($G(^ORD(100.02,NATR,1)),U,2),NATWRK=+$P($G(^(1)),U,5)
 S WHENCHT=$$GET^XPAR("ALL^"_LOC,"ORPF PRINT CHART COPY WHEN",1,"I")
 I '$L(WHENCHT) S WHENCHT="R"
 S PRMTCHT=$$GET^XPAR("ALL^"_LOC,"ORPF PROMPT FOR CHART COPY",1,"I")
 S PRMTLBL=$$GET^XPAR("ALL^"_LOC,"ORPF PROMPT FOR LABELS",1,"I")
 S PRMTREQ=$$GET^XPAR("ALL^"_LOC,"ORPF PROMPT FOR REQUISITIONS",1,"I")
 S PRMTWRK=$$GET^XPAR("ALL^"_LOC,"ORPF PROMPT FOR WORK COPY",1,"I")
 N BBPKG S BBPKG=+$O(^DIC(9.4,"B","VBECS",0))
 D INSRTBB(.ORDERS) ; insert any blood bank child lab orders into ORDERS array
 F  S I=$O(ORDERS(I)) Q:'I  I $P(ORDERS(I),U,2)'["E" D
 . S ORDERID=$P(ORDERS(I),U),RELEASE=($P(ORDERS(I),U,2)["R")
 . S J=J+1,LST(J)=ORDERID_"^^^^"
 . ;AGP this section check the order for DC Reason and grabs the print requirement
 . ;from the Nature of Order file.
 . S NPCC=1,NPWC=1
 . S NDCR=$P($G(^OR(100,+ORDERID,6)),U) I NDCR>0 D
 . .S NODE=$G(^ORD(100.02,NDCR,1))
 . .S NPCC=+$P(NODE,U,2)
 . .S NPWC=+$P(NODE,U,5)
 . ; skip chart copy if nature doesn't print, no match to 'print when',
 . ; prompt parameter says don't print, or is lab child of blood bank 
 . I NPCC,NATCHT,($P(ORDERS(I),U,2)[WHENCHT),(PRMTCHT'="*"),$$HASFMTC,$$NOTBB(+ORDERS(I)) S $P(LST(J),U,2)=1,DOCHT=1
 . ; skip label if not released, no label format, or prompt parameter
 . ; says don't print
 . I RELEASE,(PRMTLBL'="*"),$$HASFMTL S $P(LST(J),U,3)=1,DOLBL=1
 . ; skip requisition if not released, no requistion format, or the
 . ; prompt parameter says don't print
 . I RELEASE,(PRMTREQ'="*"),$$HASFMTR S $P(LST(J),U,4)=1,DOREQ=1
 . ; skip service copy if not releasing
 . I RELEASE S $P(LST(J),U,5)=1
 . ; skip work copy if nature doesn't print, not released, no work
 . ; copy format, or prompt parameter says don't print
 . I NPWC,NATWRK,RELEASE,(PRMTWRK'="*"),$$HASFMTW,$$NOTBB(+ORDERS(I)) S $P(LST(J),U,6)=1,DOWRK=1
 S LST(0)=$$DEFDEV```




 Generated on January 14th 2017, 7:26:35 am