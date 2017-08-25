---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMV EXTRACT REC<br/>
# GMV EXTRACT REC

This remote procedure call retrieves vital records from the GMRV VitalMeasurement (#120.5) file for a selected patient within a given date span. This remote procedure call is documented in Integration Agreement 4416.

## Properties

Property | Value
--- | ---
Label | GETVM
MUMPS Implementation | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMRVDATA | LITERAL | 30 | true | GMRVDATA consists of 4 pieces of information: piece1^piece2^piece3^piece4  where piece1 &#x3D; Patient (#2) file pointer (i.e., DFN)       piece2 &#x3D; End date of search (FileMan internal format)       piece3 &#x3D; single vital type abbreviation (File 120.51, Field 1)                [optional] If not defined, the default is                &quot;T;P;R;BP;HT;WT;PN;PO2;CG;CVP&quot;       piece4 &#x3D; Start date of search (FileMan internal format)



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETVM^GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
Method Comment | GMV EXTRACT REC [RPC entry point]
Input Parameters | GMRVDATA
First Comment | {::nomarkdown}<pre><code> Returns data particular patient and date/time range in RESULT<br/> GMRVDATA = DFN^END DATE VITAL TAKEN^VITAL TYPE (OPTIONAL)^START DATE VITAL TAKEN</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N DFN,GMVEND,GMVSTART,GMVTYPE<br/> S DFN=+$P(GMRVDATA,U,1),GMVEND=+$P(GMRVDATA,U,2),GMVSTART=$P(GMRVDATA,U,4),GMVTYPE=$P(GMRVDATA,U,3)<br/> K ^TMP($J,"GRPC")<br/> S:GMVEND="" GMVEND=$$NOW^XLFDT()<br/> I $P(GMVEND,".",2)'>0 S GMVEND=$P(GMVEND,".",1)_".235959"<br/> I GMVSTART="" S GMVSTART=0<br/> S:GMVTYPE'="" GMVTYPE(1)=$P(^GMRD(120.51,$O(^GMRD(120.51,"C",GMVTYPE,0)),0),"^")<br/> D EN1^GMVGETD1<br/> I '$D(^TMP($J,"GRPC")) S ^TMP($J,"GRPC",1)="0^NO "_$S(GMVTYPE'="":GMVTYPE(1),1:"VITALS/MEASUREMENTS ")_" ENTERED WITHIN THIS PERIOD"<br/> S RESULT=$NA(^TMP($J,"GRPC"))<br/> K GMRDT,GMRVARY,GMRVITY,GMRVX,GMRZZ</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
DLL File | {::nomarkdown}No Source Code Available (GMV_VitalsViewEnter.dll){:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}