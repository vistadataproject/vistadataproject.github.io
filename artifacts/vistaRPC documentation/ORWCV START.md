---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCV START 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCV START{:/}
 tag | {::nomarkdown}START{:/}
 routine | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Checks the value of the ORWOR COVER RETRIEVAL parameter and queuesprocesses to build CPRS GUI cover sheet lists as specified in theparameter.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | START^[ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 Method comment | start cover sheet build in background
 Input parameters | {::nomarkdown}DFN<br>IP<br>HWND<br>LOC<br>NODO<br>NEWREM{:/}
 Code | {::nomarkdown}  N ZTIO,ZTRTN,ZTDTH,ZTSAVE,ZTDESC,SECT,BACK,X,I,ORLIST,STR,FILE,NODE,ORHTIME,ORX<br> S ORHTIME=$H<br> S LOC=$G(LOC),NODO=";"_$G(NODO),NEWREM=+$G(NEWREM)<br> D GETLST^XPAR(.ORX,"SYS^PKG","ORWOR COVER RETRIEVAL NEW","Q")<br> S I=0 F  S I=$O(ORX(I)) Q:'I  I $D(^ORD(101.24,+ORX(I),0)) S SECT(+$P(^(0),"^",2))=$P(ORX(I),"^",2)<br> D GETLST^XPAR(.ORLIST,"ALL","ORWCV1 COVERSHEET LIST")<br> S (VAL,BACK,STR,FILE)=""<br> F  S I=$O(ORLIST(I)) Q:'I  I $D(^ORD(101.24,$P(ORLIST(I),"^",2),0))  S X0=^(0) D<br> . Q:$P(X0,"^",8)'="C"<br> . S X=$P(X0,"^",2)<br> . I NODO[(";"_X_";") Q                                  ; if in NODO, dont do section<br> . S STR=STR_X_";"<br> . I '$G(SECT(X)) S VAL=VAL_X_";"                        ; load section in foreground<br> . E  S BACK=BACK_X_";",FILE=FILE_$P(ORLIST(I),"^",2)_";"  ; load section in background<br> Q:BACK=""<br> S ZTIO="ORW THREAD RESOURCE",ZTRTN="BUILD^ORWCV",ZTDTH=$H<br> S (ZTSAVE("DFN"),ZTSAVE("IP"),ZTSAVE("HWND"),ZTSAVE("NEWREM"),ZTSAVE("LOC"),ZTSAVE("BACK"),ZTSAVE("FILE"))=""<br> S ZTDESC="CPRS GUI Background Data Retrieval"<br> D ^%ZTLOAD I '$D(ZTSK) S VAL=STR Q<br> S NODE="ORWCV "_IP_"-"_HWND_"-"_DFN<br> K ^XTMP(NODE)<br> S ^XTMP(NODE,0)=$$FMADD^XLFDT(DT,1)_U_DT_U_"Background CPRS "_ZTSK<br> I +$G(^KMPTMP("KMPD-CPRS")) S ^KMPTMP("KMPDT","ORWCV",NODE)=$G(ORHTIME)_"^^"_$G(DUZ)_"^"_$G(IO("CLNM")){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}