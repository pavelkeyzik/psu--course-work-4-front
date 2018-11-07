import React, { useState, useEffect } from 'react';
import {
  Table,
  Image,
  Popup,
  List,
  Icon,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import moment from 'moment';
import { API } from '../../../../shared/config';
import {
  format,
  messages,
} from '../../../../shared';

const FinesList = () => {
  const [fines, setFines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    const data = await getFines();
    setFines(data);
    setIsLoading(false);
  }, []);

  return (
    <>
      <Dimmer active={isLoading} inverted>
        <Loader inverted>Loading fines</Loader>
      </Dimmer>
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1} textAlign="center">{messages.en.fines.PERSON}</Table.HeaderCell>
            <Table.HeaderCell width={6}>{messages.en.fines.DESCRIPTION}</Table.HeaderCell>
            <Table.HeaderCell width={1}>{messages.en.fines.COST}</Table.HeaderCell>
            <Table.HeaderCell width={3}>{messages.en.fines.DATEOFFINE}</Table.HeaderCell>
            <Table.HeaderCell width={1} textAlign="center">{messages.en.fines.ACTIONS}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fines.map(({
            id,
            description,
            date,
            value,
            person: {
              firstName,
              lastName,
              dateOfBirth,
              avatar,
            },
          }) => (
            <Table.Row key={id}>
              <Table.Cell textAlign="center">
                <Popup wide trigger={<Image src={avatar} avatar />} on="hover">
                  <Popup.Header>{`${firstName} ${lastName}`}</Popup.Header>
                  <Popup.Content>
                    <List>
                      <List.Item icon="birthday cake" content={dateOfBirth} />
                    </List>
                  </Popup.Content>
                </Popup>
              </Table.Cell>
              <Table.Cell>{description}</Table.Cell>
              <Table.Cell>{value}$</Table.Cell>
              <Table.Cell>{moment(date).format(format.DATETIME)}</Table.Cell>
              <Table.Cell textAlign="center">
                <Icon color="grey" name="edit" />
                <Icon color="green" name="download" />
                <Icon color="red" name="remove" />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

const getFines = async () => {
  const response = await fetch(`${API}/fines`);
  return await response.json();
}

export default FinesList;