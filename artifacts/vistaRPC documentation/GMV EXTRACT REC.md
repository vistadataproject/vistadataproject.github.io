---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; GMV EXTRACT REC 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV EXTRACT REC{:/}
 tag | {::nomarkdown}GETVM{:/}
 routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call retrieves vital records from the GMRV VitalMeasurement (#120.5) file for a selected patient within a given date span. This remote procedure call is documented in Integration Agreement 4416.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMRVDATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}GMRVDATA consists of 4 pieces of information: piece1^piece2^piece3^piece4  where piece1 = Patient (#2) file pointer (i.e., DFN)       piece2 = End date of search (FileMan internal format)       piece3 = single vital type abbreviation (File 120.51, Field 1)                [optional] If not defined, the default is                \T;P;R;BP;HT;WT;PN;PO2;CG;CVP\       piece4 = Start date of search (FileMan internal format){:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETVM^[GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 Method comment | GMV EXTRACT REC [RPC entry point]
 First comment | {::nomarkdown}Returns data particular patient and date/time range in RESULT<br/>GMRVDATA = DFN^END DATE VITAL TAKEN^VITAL TYPE (OPTIONAL)^START DATE VITAL TAKEN{:/}
 Input parameters | {::nomarkdown}GMRVDATA{:/}
 Code | ```  N DFN,GMVEND,GMVSTART,GMVTYPE<br/> S DFN=+$P(GMRVDATA,U,1),GMVEND=+$P(GMRVDATA,U,2),GMVSTART=$P(GMRVDATA,U,4),GMVTYPE=$P(GMRVDATA,U,3)<br/> K ^TMP($J,"GRPC")<br/> S:GMVEND="" GMVEND=$$NOW^XLFDT()<br/> I $P(GMVEND,".",2)'>0 S GMVEND=$P(GMVEND,".",1)_".235959"<br/> I GMVSTART="" S GMVSTART=0<br/> S:GMVTYPE'="" GMVTYPE(1)=$P(^GMRD(120.51,$O(^GMRD(120.51,"C",GMVTYPE,0)),0),"^")<br/> D EN1^GMVGETD1<br/> I '$D(^TMP($J,"GRPC")) S ^TMP($J,"GRPC",1)="0^NO "_$S(GMVTYPE'="":GMVTYPE(1),1:"VITALS/MEASUREMENTS ")_" ENTERED WITHIN THIS PERIOD"<br/> S RESULT=$NA(^TMP($J,"GRPC"))<br/> K GMRDT,GMRVARY,GMRVITY,GMRVX,GMRZZ```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}