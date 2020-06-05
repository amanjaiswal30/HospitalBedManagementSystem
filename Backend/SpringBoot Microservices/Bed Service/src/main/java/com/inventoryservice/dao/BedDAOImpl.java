package com.inventoryservice.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.inventoryservice.model.Bed;

@Repository
public class BedDAOImpl implements BedDAO {

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Bed> get() {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Bed> query = currentSession.createQuery("from Bed", Bed.class);
		List<Bed> list = query.getResultList();
		return list;
	}

	@Override
	public Bed get(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Bed bedObj = currentSession.get(Bed.class, id);
		return bedObj;
	}

	@Override
	public void save(Bed bed) {
		Session currentSession = entityManager.unwrap(Session.class);
		currentSession.save(bed);
	}

	@Override
	public void delete(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Bed bedObj = currentSession.get(Bed.class, id);
		currentSession.delete(bedObj);
	}

	@Override
	public Bed getbyAvailability(String bedType) {
		Session currentSession = entityManager.unwrap(Session.class);
		String hql="From Bed B WHERE B.availability=1 AND B.bedtype= :bedName";
		Query<Bed> query=currentSession.createQuery(hql,Bed.class);
		query.setParameter("bedName", bedType);
		List<Bed> list=query.getResultList();
		return list.get(0);
	}




}
