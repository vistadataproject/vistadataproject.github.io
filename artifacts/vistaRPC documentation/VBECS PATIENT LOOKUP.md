---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VBECS PATIENT LOOKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VBECS PATIENT LOOKUP{:/}
 tag | {::nomarkdown}SEARCH{:/}
 routine | [VBECLU](http://code.osehra.org/dox/Routine_VBECLU_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns XML containing a list of patient demographic data for the purpose of inserting a new patient in the VBECS database for when receiving an autologous or directed unit on a patient that is not already defined in the VBECS Patient table. XML Mapping:count attribute =       Number of records foundNumber element =        Sequence number of records foundVistaPatientId =        PATIENT file (#2) / NUMBER field (#.001)PatientLastName =       PATIENT file (#2) / first comma delimited piece                         of the NAME field (#.01)PatientFirstName =      PATIENT file (#2) / second comma delimited piece                         and first \space\ delimited piece of the NAME                        field (#.01)PatientMiddleName =     PATIENT file (#2) / second comma delimited piece                        and second \space\ delimited piece of the NAME                        field (#.01)Sensitive =             DG SECURITY LOG file (#38.1) / SECURITY LEVEL                         field (#2)PatientDOB =            PATIENT file (#2) / DATE OF BIRTH field (#.03) in                         HL7 formatPatientDOBCode =        Code derived from a missing day or month value in                         PatientDOB.                        B = Both Day and Month is unknown.                        M = Month is unknown.                        D = Day is unknown                        V = valid Day/Month/YearPatientSSN =            PATIENT file (#2) / SOCIAL SECURITY NUMBER field                         (#.09)PatientDeathDate =      PATIENT file (#2) / DATE OF DEATH field (#.351)Type =                  TYPE OF PATIENT file (#391) / NAME field (#.01)PrimaryEligibility =    MAS ELIGIBILITY CODE file (#8.1) / PRINT NAME                         field (#5)ServiceConnected =      PATIENT file (#2) / SERVICE CONNECTED? field                         (#.301)ScPercent =             PATIENT file (#2) / SERVICE CONNECTED PERCENTAGE                         field (#.302)PatientSexCode =        PATIENT file (#2) / SEX field (#.02)PatientICN =            PATIENT file (#2) / INTEGRATION CONTROL NUMBER                         field (#991.01)Veteran =               PATIENT file (#2) / VETERAN (Y/N)? field (#1901)PatientLocation =       PATIENT file (#2) / WARD LOCATION field (#.1)PatientRoomBed =        PATIENT file (#2) / ROOM-BED field (#.101)  XML Example:<record count='1'>    <Patient>        <Number>1</Number>        <VistaPatientID>1000</VistaPatientID>        <PatientLastName>VBECSpatient</PatientLastName>        <PatientFirstName>One</PatientFirstName>        <PatientMiddleName>T</PatientMiddleName>        <Sensitive>false</Sensitive>        <PatientDOB>19291120</PatientDOB>        <PatientDOBCode>V</PatientDOBCode>        <PatientSSN>666000000</PatientSSN>        <Type>SC VETERAN</Type>        <PrimaryEligibility>SC, 50% TO 100%</PrimaryEligibility>        <ServiceConnected>true</ServiceConnected>        <ScPercent>50</ScPercent>        <PatientSexCode>M</PatientSexCode>        <PatientICN>1000000000V000000</PatientICN>        <Veteran>true</Veteran>        <PatientLocation></PatientLocation>        <PatientRoomBed></PatientRoomBed>    </Patient></record>{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input PARAM(\SEARCH TYPE\) = type of search requestedInput PARAM(\SEARCH VALUE\) = value to search onRETURN PARAMETER DESCRIPTION:XML document with list of patients found based on search type andsearch value.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}