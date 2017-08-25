---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VBECS LAB TEST RESULTS LOOKUP<br/>
# VBECS LAB TEST RESULTS LOOKUP

This RPC returns XML containing a list of Laboratory test results for a patient within a given date range. The data returned is provided by the Lab API RR^LR7OR1 in the ^TMP("LRRR" global array in the following format. ^TMP("LRRR",$J,DFN,SUB,inverse d/t,sequence #)  = Test^result^L/N flag^units^reference range^result status^^^Nat'l Code^Name^System^Verified b y^^Therapeutic flag^Print Name^Accession^Order# XML Mapping:VistaPatientId element =  DFNLabTestId element =       TestTestPrintName element =   Print NameTestResult element =      resultTestDate element =        inverse d/t (Converted to HL7 format)  XML Example:<LabTests>    <LabTest>        <VistaPatientId>378793</VistaPatientId>        <LabTestId>3</LabTestId>        <TestPrintName>HGB</TestPrintName>        <TestResult>14.1</TestResult>        <TestDate>20010910122446-0600</TestDate>    </LabTest>    <LabTest>         <VistaPatientId>378793</VistaPatientId>         <LabTestId>3</LabTestId>         <TestPrintName>HGB</TestPrintName>         <TestResult>14.4</TestResult>         <TestDate>20010430115535-0600</TestDate>    </LabTest></LabTests>

## Properties

Property | Value
--- | ---
Label | TSTRSLT
MUMPS Implementation | [VBECRPCA](http://code.osehra.org/dox/Routine_VBECRPCA_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SDATE | LITERAL |  | true | The SDATE input parameter represents the start date used to search for Laboratory test results in the Lab API RR^LR7OR1.
EDATE | LITERAL | 30 | true | The EDATE input parameter represents the end date to search for Laboratory test results in the Lab API RR^LR7OR1.
DIV | LITERAL | 12 | true | The DIV input parameter representd the Division (Station Number) where the results were obtained.NOTE:  This parameter is for future use.
TESTS | LITERAL | 999 | true | An array of Laboratory Test IENs used to search for results.  TESTS(1)&#x3D;&quot;3536&quot;  TESTS(2)&#x3D;&quot;4090&quot;
PATS | LITERAL | 999 | true | An array of Patient IENs used to search for Lab test results.  PATS(1)&#x3D;&quot;495943&quot;  PATS(2)&#x3D;&quot;39282&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}