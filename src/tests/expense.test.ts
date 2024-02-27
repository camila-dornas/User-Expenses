import sinon from 'sinon';
import { expect } from 'chai';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import * as expenseModels from '../models/expenseModels';
import * as expenseController from '../controllers/expenseController';
import { Request, Response } from 'express';
import {returnExpense, requestExpense } from './expense.mock';
import { afterEach, describe, it } from 'node:test';

chai.use(sinonChai);

const res = {
  status: sinon.stub().returnsThis(),
  json: sinon.stub().returnsThis(),
};

describe('Expense controller', function() {
  afterEach(sinon.restore);

  it('Create a new expense', async () => {
    sinon
      .stub(expenseModels, 'CreateExpenseDatabase')
      .resolves(returnExpense);
    

    const req = { body: requestExpense };

    await expenseController.createExpenseController(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(201);
  });
})