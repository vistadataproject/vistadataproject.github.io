---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; VBECS LAB TEST RESULTS LOOKUP 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VBECS LAB TEST RESULTS LOOKUP{:/}
 tag | {::nomarkdown}TSTRSLT{:/}
 routine | [VBECRPCA](http://code.osehra.org/dox/Routine_VBECRPCA_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns XML containing a list of Laboratory test results for a patient within a given date range. The data returned is provided by the Lab API RR^LR7OR1 in the ^TMP(\LRRR\ global array in the following format. ^TMP(\LRRR\,$J,DFN,SUB,inverse d/t,sequence #)  = Test^result^L/N flag^units^reference range^result status^^^Nat'l Code^Name^System^Verified b y^^Therapeutic flag^Print Name^Accession^Order# XML Mapping:VistaPatientId element =  DFNLabTestId element =       TestTestPrintName element =   Print NameTestResult element =      resultTestDate element =        inverse d/t (Converted to HL7 format)  XML Example:<LabTests>    <LabTest>        <VistaPatientId>378793</VistaPatientId>        <LabTestId>3</LabTestId>        <TestPrintName>HGB</TestPrintName>        <TestResult>14.1</TestResult>        <TestDate>20010910122446-0600</TestDate>    </LabTest>    <LabTest>         <VistaPatientId>378793</VistaPatientId>         <LabTestId>3</LabTestId>         <TestPrintName>HGB</TestPrintName>         <TestResult>14.4</TestResult>         <TestDate>20010430115535-0600</TestDate>    </LabTest></LabTests>{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The SDATE input parameter represents the start date used to search for Laboratory test results in the Lab API RR^LR7OR1.{:/} | 
| {::nomarkdown}EDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The EDATE input parameter represents the end date to search for Laboratory test results in the Lab API RR^LR7OR1.{:/} | 
| {::nomarkdown}DIV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The DIV input parameter representd the Division (Station Number) where the results were obtained.NOTE:  This parameter is for future use.{:/} | 
| {::nomarkdown}TESTS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}An array of Laboratory Test IENs used to search for results.  TESTS(1)=\3536\  TESTS(2)=\4090\{:/} | 
| {::nomarkdown}PATS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}An array of Patient IENs used to search for Lab test results.  PATS(1)=\495943\  PATS(2)=\39282\{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}