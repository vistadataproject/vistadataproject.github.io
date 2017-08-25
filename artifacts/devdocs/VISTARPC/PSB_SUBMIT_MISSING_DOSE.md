---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB SUBMIT MISSING DOSE<br/>
# PSB SUBMIT MISSING DOSE

Allows the client to submit a missing dose interactively.

## Properties

Property | Value
--- | ---
Label | RPC
MUMPS Implementation | [PSBMD](http://code.osehra.org/dox/Routine_PSBMD_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBDFN | LITERAL |  | true | Patient DFN (IEN)
PSBDRUG | LITERAL |  | true | This is the IEN of the drug from File #50.
PSBDOSE | LITERAL |  |  | Dosage.
PSBRSN | LITERAL |  | true | Missing Dose reason. INTERNALLY-STORED CODE: 1   WILL STAND FOR: DROPPEDINTERNALLY-STORED CODE: 2   WILL STAND FOR: EMPTY PACKAGEINTERNALLY-STORED CODE: 3   WILL STAND FOR: NOT AVAILABLEINTERNALLY-STORED CODE: 4   WILL STAND FOR: WRONG DOSE/DRUG DELIVERED
PSBADMIN | LITERAL |  | true | Administration time of the medication.
PSBNEED | LITERAL |  | true | Needed date/time of the medication
PSBUID | LITERAL |  | true | Unique ID of an IV bag if it&#x27;s an IV order.
PSBON | LITERAL |  | true | Order Number
PSBSCHD | LITERAL |  | true | Medication Schedule.
PSBCLIN | LITERAL | 30 | true | Clinic Name
PSBCLNIEN | LITERAL |  | true | Clinic pointer to the HOSPITAL LOCATION file (#44) for a clinic submitting a missing dose request.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}