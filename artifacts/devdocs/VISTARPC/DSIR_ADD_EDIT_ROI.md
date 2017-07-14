---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR ADD EDIT ROI<br/>
# DSIR ADD EDIT ROI

Create new or update existing ROI Instance File 19620.

## Properties

Property | Value
--- | ---
Label | UPDATE
Routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA ARRAY | LIST |  | true | Input: DATA: Array (1): Patient DFN (2): Purpose (3): ROI Clerk (IFN) (4): Requestor (IFN) (5): Received Date (FM Format) (6): Authority for request (Pointer to 19620.51) (7): Type of request (Pointer to 19620.61) (8): Requestor type (Pointer to 19620.71) (9): **** FUTURE USE **** (10): Priority (0 - Normal , 1 - High) (11): Release Drug Abuse Info?     **(0 - Don&#x27;t Release , 1 - Release) (12): &#x27;     &#x27; Alcoholism Info?** (13): &#x27;     &#x27; HIV Info?** (14): &#x27;     &#x27; Sickle Cell Anemia?** (15): &#x27;     &#x27; Copy of Hospital Summary?** (16): &#x27;     &#x27; Copy of Outpatient Treatment Notes?** (17): &#x27;     &#x27; Other info?** (18): Mail to address (Pointer to 19620.92) (19): Patient address (Pointer to 19620.92) (20): ROI IEN (Add new if null) (21): Status (Default to Open if (20) is null) (22): Exemptions 1 thru 9 This is a multi-piece value delimited by &quot;;&quot;       in the following exemption order: 1;2;3;4;5;6;7a;7b;7c;7d;7e;7f;8;9       A one in the above positions means that exemption was used (23): Expedite Requested (0 &#x3D; No, 1 &#x3D; Yes) (24): Expedite Granted (0 &#x3D; No, 1 &#x3D; Yes) (25): 38 USC 5701  (0 &#x3D; No, 1 &#x3D; Yes) (26): 38 USC 5705  (0 &#x3D; No, 1 &#x3D; Yes) (27): 35 USC 205   (0 &#x3D; No, 1 &#x3D; Yes) (28): 38 USC 7332  (0 &#x3D; No, 1 &#x3D; Yes) (29): OTHER EXEMPTION  (Free text) (30): Document Print Order (Free text) (31): Document Print Order Continuation (Free text) (32): No Exceptions Required (0&#x3D;N/A, 1&#x3D;No Exceptions Required) (33): Date Expedited Requested (FM Format) (34): Expedited Adjudicated (35): Date Expedited Adjudicated (FM Format) (36): 41 USC 253B  (0 &#x3D; No, 1 &#x3D; Yes) (37): 5 USC APP 3  (0 &#x3D; No, 1 &#x3D; Yes) (38): Fee Waiver Requested (0 &#x3D; No, 1 &#x3D; Yes) (39): Fee Waiver Requested Date  (40): Fee Waiver Adjudicated (0 &#x3D; No, 1 &#x3D; Yes) (41): Fee Waiver Adjudicated Date  (42): Fee Waiver Granted (0 &#x3D; No, 1 &#x3D; Yes) (43): No Records (0 &#x3D; No, 1 &#x3D; Yes) (44): Referral (0 &#x3D; No, 1 &#x3D; Yes) (45): Records Not Reasonably Described (0 &#x3D; No, 1 &#x3D; Yes) (46): Not an Agency Record (0 &#x3D; No, 1 &#x3D; Yes) (47): Duplicate Request (0 &#x3D; No, 1 &#x3D; Yes) (48): Delivery Type (0-6) (49): Received Type (0-3) (50): Medically Sensitive (51): Address type        null or 0 &#x3D; undefined       1 &#x3D; Primary       2 &#x3D; Temportary       3 &#x3D; Conficential (52): How Created       W &#x3D; Wizard       P &#x3D; Multiple Patient       R &#x3D; Multiple Requestor



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}